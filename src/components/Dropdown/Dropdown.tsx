import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import Typography from "../Typography";
import IconArrow from "./icon-12-arrowdown.svg";
import IconCheck from "./icon__check.svg";

interface IOption {
  id: string | number;
  label: string | number;
}

export interface DropdownProps {
  options: IOption[];
  defaultOption?: IOption;
  active?: IOption;
  onSelected?(selected: IOption): void;
  placeholder?: string;
}

export const Dropdown = ({
  options,
  defaultOption,
  active,
  onSelected,
  placeholder,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const activeValue = useMemo(
    () => active ?? defaultOption,
    [active, defaultOption]
  );
  const isActive = useMemo(
    () => (active ? defaultOption?.id !== active.id : false),
    [active, defaultOption]
  );

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  const handleSelect = useCallback(
    (selected: IOption) => () => {
      setOpen(false);
      if (onSelected && selected.id !== activeValue?.id) {
        onSelected(selected);
      }
    },
    [activeValue?.id, onSelected, setOpen]
  );

  return (
    <Root>
      <Box>
        <Item onClick={handleClick} ellipsis>
          {activeValue ? activeValue.label : placeholder}
          <Arrow />
        </Item>
      </Box>
      {open && (
        <>
          <Backdrop onClick={handleClick} />
          <List>
            {options.map((i) => (
              <Item key={i.id} onClick={handleSelect(i)} title={i.label}>
                <Typography as="div" ellipsis>
                  {i.label}
                </Typography>
                {i.id === activeValue?.id && <Check />}
              </Item>
            ))}
          </List>
        </>
      )}
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  position: relative;
`;

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Item = styled(Typography).attrs({ as: "div", variant: "body1" })<{
  size?: string;
}>`
  height: ${({ size }) => (size === "large" ? 44 : 36)}px;
  cursor: pointer;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${theme.palette.blackLighter};
  :hover {
    background-blend-mode: multiply;
    background-image: linear-gradient(
      to bottom,
      ${theme.palette.borderGray},
      ${theme.palette.borderGray}
    );
  }
`;

const Box = styled.div`
  border-radius: 4px;
  border: solid 1px ${theme.palette.borderGray};
  background-color: ${theme.palette.white};
`;

const Icon = styled.div`
  flex-shrink: 0;
  background-position: center;
  background-repeat: no-repeat;
`;

const Arrow = styled(Icon)`
  background-image: url(${IconArrow});
  width: 12px;
  height: 12px;
`;

const Check = styled(Icon)`
  background-image: url(${IconCheck});
  width: 16px;
  height: 16px;
`;

const List = styled(Box)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: inherit;
  z-index: 1;
`;
