import { Flex } from '@chakra-ui/react';
import type { RootState } from 'app/store';
import { useAppDispatch, useAppSelector } from 'app/storeHooks';
import IAISwitch from 'common/components/IAISwitch';
import { setMask } from 'features/parameters/store/postprocessingSlice';
import { ChangeEvent } from 'react';

const MaskingSettings = () => {
  const dispatch = useAppDispatch();

  const maskType = useAppSelector(
    (state: RootState) => state.postprocessing.maskType
  );

  const handleChangeAutomaticMasking = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(setMask(e.target.checked ? 'segment-anything' : null));

  return (
    <Flex rowGap="0.8rem" direction={'column'}>
      <IAISwitch
        label={'Mask Generation'}
        fontSize="md"
        isChecked={maskType === 'segment-anything'}
        onChange={handleChangeAutomaticMasking}
      />
    </Flex>
  );
};

export default MaskingSettings;
