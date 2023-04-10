import { RootState } from 'app/store';
import { useAppDispatch, useAppSelector } from 'app/storeHooks';
import IAISwitch from 'common/components/IAISwitch';
import { setOutputAlphaMaskEnabled } from 'features/parameters/store/postprocessingSlice';

export default function MaskingToggle() {
  const shouldUseMasking = useAppSelector(
    (state: RootState) => state.postprocessing.outputAlphaMaskEnabled
  );

  const dispatch = useAppDispatch();

  return (
    <IAISwitch
      isChecked={shouldUseMasking}
      onChange={(e) => dispatch(setOutputAlphaMaskEnabled(e.target.checked))}
    />
  );
}
