import { FormControl, Textarea } from '@chakra-ui/react';
import { RootState } from 'app/store';
import { useAppDispatch, useAppSelector } from 'app/storeHooks';
import { setOutputAlphaMaskTextPrompt } from 'features/parameters/store/postprocessingSlice';
import { useTranslation } from 'react-i18next';

export default function Text2MaskSettings() {
  const outputAlphaMaskTextPrompt = useAppSelector(
    (state: RootState) => state.postprocessing.outputAlphaMaskTextPrompt
  );

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <FormControl>
      <Textarea
        value={outputAlphaMaskTextPrompt}
        onChange={(e) => dispatch(setOutputAlphaMaskTextPrompt(e.target.value))}
        background="var(--prompt-bg-color)"
        placeholder={t('parameters.outputAlphaMaskTextPrompt')}
        _placeholder={{ fontSize: '0.8rem' }}
        borderColor="var(--border-color)"
        _hover={{
          borderColor: 'var(--border-color-light)',
        }}
        fontSize="0.9rem"
        color="var(--text-color-secondary)"
      />
    </FormControl>
  );
}
