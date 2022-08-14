import Form from "../components/form";
import Table from "../components/table";
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';

const stackTokens = { childrenGap: 50 };
const stackStyles: Partial<IStackStyles> = { root: { width: "100%" } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: "100%" } },
}

const Body = () => {
    return (
        <Stack horizontal tokens={stackTokens} styles={stackStyles}>
            <Stack {...columnProps}>
                <Form />
            </Stack>
            <Stack {...columnProps}>
                <Table />
            </Stack>
        </Stack>
    )
}

export default Body;