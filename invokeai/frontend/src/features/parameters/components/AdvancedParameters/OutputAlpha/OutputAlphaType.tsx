import { FACETOOL_TYPES, OUTPUT_ALPHA_MASK_TYPES } from 'app/constants';
import { RootState } from 'app/store';
import { useAppDispatch, useAppSelector } from 'app/storeHooks';
import IAISelect from 'common/components/IAISelect';
import {
  OutputAlphaMaskType,
  setOutputAlphaMaskType,
} from 'features/parameters/store/postprocessingSlice';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

export default function OutputAlphaType() {
  const outputAlphaMaskType = useAppSelector(
    (state: RootState) => state.postprocessing.outputAlphaMaskType
  );

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleChangeOutputAlphaMaskType = (e: ChangeEvent<HTMLSelectElement>) =>
    dispatch(setOutputAlphaMaskType(e.target.value as OutputAlphaMaskType));

  return (
    <IAISelect
      label={t('parameters.type')}
      validValues={OUTPUT_ALPHA_MASK_TYPES.concat()}
      value={outputAlphaMaskType}
      onChange={handleChangeOutputAlphaMaskType}
    />
  );
}
