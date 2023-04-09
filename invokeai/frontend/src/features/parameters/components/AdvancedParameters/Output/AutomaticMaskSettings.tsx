import { Flex } from '@chakra-ui/react';
import type { RootState } from 'app/store';
import { useAppDispatch, useAppSelector } from 'app/storeHooks';
import IAISwitch from 'common/components/IAISwitch';
import { setAutomaticMasking } from 'features/parameters/store/postprocessingSlice';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

const AutomaticMaskSettings = () => {
  const dispatch = useAppDispatch();

  const automaticMasking = useAppSelector(
    (state: RootState) => state.postprocessing.automaticMasking
  );

  const { t } = useTranslation();

  const handleChangeAutomaticMasking = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(setAutomaticMasking(e.target.checked));

  return (
    <Flex rowGap="0.8rem" direction={'column'}>
      {'automatic masking?!'}
      <IAISwitch
        label={t('automatic mask')}
        fontSize="md"
        isChecked={automaticMasking}
        onChange={handleChangeAutomaticMasking}
      />
    </Flex>
  );
};

export default AutomaticMaskSettings;
