import { Meta, Story } from "@storybook/react";
import { useCallback, useState } from "react";
import {
  PaginationContainer,
  IPagination,
} from "../components/Pagination/PaginationContainer";

export default {
  title: "components/Pagination",
  component: PaginationContainer,
} as Meta;

const Template: Story<IPagination> = (args) => {
  const [active, setActive] = useState(1);

  const handlePage = useCallback(
    (page: any) => {
      setActive(page);
    },
    [setActive]
  );

  return (
    <PaginationContainer
      {...args}
      activePage={active}
      onPageChange={handlePage}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  itemsCountPerPage: 20,
  totalItemsCount: 2880,
  pageRangeDisplayed: 20,
};
