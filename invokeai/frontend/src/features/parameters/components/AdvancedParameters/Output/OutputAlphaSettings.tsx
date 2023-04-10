import { Flex } from '@chakra-ui/react';
import type { RootState } from 'app/store';
import { useAppSelector } from 'app/storeHooks';
import OutputAlphaType from '../OutputAlpha/OutputAlphaType';
import Text2MaskSettings from '../OutputAlpha/Text2MaskSettings';
import SegmentAnythingSettings from '../OutputAlpha/SegmentAnythingSettings';

const OutputAlphaSettings = () => {
  const maskType = useAppSelector(
    (state: RootState) => state.postprocessing.outputAlphaMaskType
  );

  return (
    <Flex direction="column" gap={2} minWidth="20rem">
      <OutputAlphaType />
      {maskType === 'text2mask' && <Text2MaskSettings />}
      {maskType === 'segment-anything' && <SegmentAnythingSettings />}
    </Flex>
  );
};

export default OutputAlphaSettings;
