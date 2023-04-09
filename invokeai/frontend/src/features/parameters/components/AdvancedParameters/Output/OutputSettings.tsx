import { Flex } from '@chakra-ui/react';
import HiresSettings from './HiresSettings';
import SeamlessSettings from './SeamlessSettings';
import AutomaticMaskSettings from './AutomaticMaskSettings';

const OutputSettings = () => {
  return (
    <Flex gap={2} direction="column">
      <SeamlessSettings />
      <HiresSettings />
      <AutomaticMaskSettings />
    </Flex>
  );
};

export default OutputSettings;
