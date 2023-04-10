import { FormControl, Textarea } from '@chakra-ui/react';
import { RootState } from 'app/store';
import { useAppDispatch, useAppSelector } from 'app/storeHooks';
import { useTranslation } from 'react-i18next';

export default function Text2MaskSettings() {
  const negativePrompt = useAppSelector(
    (state: RootState) => state.generation.outputAlphaMaskPromptText
  );

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <FormControl>
      <Textarea
        id="negativePrompt"
        name="negativePrompt"
        value={negativePrompt}
        onChange={(e) => dispatch(setOutputAlphaMaskType(e.target.value))}
        background="var(--prompt-bg-color)"
        placeholder={t('parameters.negativePrompts')}
        _placeholder={{ fontSize: '0.8rem' }}
        borderColor="var(--border-color)"
        _hover={{
          borderColor: 'var(--border-color-light)',
        }}
        _focusVisible={{
          borderColor: 'var(--border-color-invalid)',
          boxShadow: '0 0 10px var(--box-shadow-color-invalid)',
        }}
        fontSize="0.9rem"
        color="var(--text-color-secondary)"
      />
    </FormControl>
  );
}
