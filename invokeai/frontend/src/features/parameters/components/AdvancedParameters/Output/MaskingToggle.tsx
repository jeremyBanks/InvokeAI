import { RootState } from 'app/store';
import { useAppDispatch, useAppSelector } from 'app/storeHooks';
import IAISwitch from 'common/components/IAISwitch';
import { setShouldUseMasking } from 'features/parameters/store/generationSlice';

export default function MaskingToggle() {
  const shouldUseMasking = useAppSelector(
    (state: RootState) => state.generation.shouldUseMasking
  );

  const dispatch = useAppDispatch();

  return (
    <IAISwitch
      isChecked={shouldUseMasking}
      onChange={(e) => dispatch(setShouldUseMasking(e.target.checked))}
    />
  );
}
