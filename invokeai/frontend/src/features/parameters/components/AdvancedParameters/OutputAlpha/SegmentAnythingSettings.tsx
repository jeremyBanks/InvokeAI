import { SEGMENT_ANYTHING_TARGETS } from 'app/constants';
import { RootState } from 'app/store';
import { useAppDispatch, useAppSelector } from 'app/storeHooks';
import IAISelect from 'common/components/IAISelect';
import {
  OutputAlphaMaskSamTarget,
  setOutputAlphaMaskSamTarget,
} from 'features/parameters/store/postprocessingSlice';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

export default function SegmentAnythingSettings() {
  const outputAlphaMaskSamTarget = useAppSelector(
    (state: RootState) => state.postprocessing.outputAlphaMaskSamTarget
  );

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleChangeOutputAlphaMaskSamTarget = (
    e: ChangeEvent<HTMLSelectElement>
  ) =>
    dispatch(
      setOutputAlphaMaskSamTarget(e.target.value as OutputAlphaMaskSamTarget)
    );

  return (
    <IAISelect
      label={t('parameters.outputAlphaMaskSamTarget')}
      value={outputAlphaMaskSamTarget}
      onChange={handleChangeOutputAlphaMaskSamTarget}
      validValues={SEGMENT_ANYTHING_TARGETS.concat()}
    />
  );
}
