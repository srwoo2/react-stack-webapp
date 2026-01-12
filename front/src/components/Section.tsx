/* eslint-disable import/no-extraneous-dependencies */
import { Box, Button, Meter, Stack, Text } from 'grommet';
import { Trash } from 'grommet-icons';
import React from 'react';
import { timeFormatter } from '../utils/utils';

interface SectionProps {
  id: string;
  est: number;
  act: number;
  title: string;
  isDiscuss: boolean;
  removeSection: (id: string) => void;
  startDiscuss: (id: string) => void;
  stopDiscuss: (id: string) => void;
}

export const Section: React.FC<SectionProps> = ({
  id,
  est,
  act,
  title,
  isDiscuss,
  removeSection,
  startDiscuss,
  stopDiscuss,
}) => {
  const initTime = est * 60;
  const remainingTime = () => initTime - act;

  return (
    <tr>
      <td className="center">
        <Text color="gray" style={{ marginRight: 5 }}>
          {timeFormatter(initTime)}
        </Text>
      </td>
      <td className="center">
        <Text size="large" color={act <= 0 ? 'lightgray' : '#444'}>
          {timeFormatter(act)}
        </Text>
      </td>
      <td style={{ padding: 0 }}>
        <Stack>
          <Text
            size="large"
            style={{
              margin: 12,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {title}
          </Text>
          <Box style={{ marginTop: -10, opacity: 0.2 }}>
            <Meter
              values={[
                {
                  value: act,
                  color: remainingTime() < 0 ? 'red' : undefined,
                },
              ]}
              size="full"
              max={initTime}
              background="rgba(0,0,0,0)"
              thickness="large"
            />
          </Box>
        </Stack>
      </td>
      <td className="center">
        <Button
          plain
          size="small"
          color="#ccc"
          style={isDiscuss ? { color: 'black', animation: 'blink 1s linear infinite' } : undefined}
          onClick={() => (isDiscuss ? stopDiscuss(id) : startDiscuss(id))}
          label="Discuss"
        />
        <Button
          size="small"
          icon={<Trash size="small" color="gray" />}
          style={{ marginLeft: 14 }}
          onClick={() => removeSection(id)}
        />
      </td>
    </tr>
  );
};

export default Section;
