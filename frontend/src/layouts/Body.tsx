import Form from "../components/form";
import Table from "../components/table";
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { IClientGet, IClientPost } from "../helper/api/interfaces";
import { useEffect, useState } from "react";
import { createClient, getClients } from "../helper/api/client";

const stackTokens = { childrenGap: 50 };
const stackStyles: Partial<IStackStyles> = { root: { width: "100%" } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: "100%" } },
}

const Body = () => {

    const [items, setItems] = useState<IClientGet[]>([]);
    console.log(items)

    const getItems = async () => {
        const data = await getClients();
        setItems(data);
    }

    const handleSubmit = async (item: IClientPost) => {
        const response = await createClient(item);
        if (response.status === 200) {
            getItems();
        }

    }

    useEffect( () => {
		getItems()
	}, [])

    return (
        <Stack horizontal tokens={stackTokens} styles={stackStyles}>
            <Stack {...columnProps}>
                <Form handleSubmit={handleSubmit} />
            </Stack>
            <Stack {...columnProps}>
                <Table items={items} />
            </Stack>
        </Stack>
    )
}

export default Body;