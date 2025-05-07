import React from "react";
import { Box, Flex, Typography } from "@strapi/design-system";
import { useIntl } from "react-intl";
import { ColorPickerProps } from "./types";

const ColorPicker: React.FC<ColorPickerProps> = ({
  name,
  onChange,
  value,
  intlLabel,
  disabled,
  error,
  description,
  required,
}) => {
  const { formatMessage } = useIntl();

  return (
    <Box>
      <Flex direction="column" alignItems="stretch" gap={1}>
        <Typography variant="pi" fontWeight="bold">
          {formatMessage(intlLabel)}
          {required && (
            <Typography variant="pi" fontWeight="bold" textColor="danger600">
              {" "}
              *
            </Typography>
          )}
        </Typography>
        <input
          type="color"
          name={name}
          value={value || "#000000"}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          style={{
            width: "100%",
            height: "40px",
            padding: "0",
            border: error ? "1px solid #d02b20" : "1px solid #dcdce4",
            borderRadius: "4px",
            cursor: disabled ? "not-allowed" : "pointer",
          }}
        />
        {error && (
          <Typography variant="pi" textColor="danger600">
            {error}
          </Typography>
        )}
        {description && (
          <Box>
            <Typography variant="pi">{formatMessage(description)}</Typography>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default ColorPicker;
