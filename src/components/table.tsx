import { 
	DetailsList, 
	SelectionMode, 
	DetailsHeader,  
	DetailsListLayoutMode, 
	IDetailsHeaderProps, 
	IColumn 
} from '@fluentui/react/lib/DetailsList';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { useEffect, useState } from 'react';
import { getTopFiveClients } from '../helper/db/boutique/clients';

const headerStyle= { 
	root: { paddingTop: 0 }
}

const searchBoxStyle = { 
	root: { width: "40%" }
}

const Table = () => {
    // const items = [
	// 	{
	// 		key: 1,
	// 		name: "Jeniffer Chen",
	// 		createdAt: "01/01/2020",
	// 		address: "Lorem ipsum dolor sit amet  consectetur adipiscing elit.",
	// 		phoneNum: 123123123,
	// 		measurement: "88,5 ; 76 ; 90 ; 97; 17 - 18 / 23; 38 -38 / 33; 55; 98",
	// 		code: 19909
	// 	},
	// 	{
	// 		key: 2,
	// 		name: "Jeniffer Chen",
	// 		createdAt: "01/01/2020",
	// 		address: "Lorem ipsum.",
	// 		phoneNum: 123123123,
	// 		measurement: "88,5 ; 76 ; 90 ; 97;",
	// 		code: 19909
	// 	},
	// 	{
	// 		key: 3,
	// 		name: "Jeniffer Chen",
	// 		createdAt: "01/01/2020",
	// 		address: "Lorem ipsum.",
	// 		phoneNum: 123123123,
	// 		measurement: "88,5 ; 76 ; 90 ; 97;",
	// 		code: 19909
	// 	},
	// 	{
	// 		key: 4,
	// 		name: "Jeniffer Chen",
	// 		createdAt: "01/01/2020",
	// 		address: "Lorem ipsum.",
	// 		phoneNum: 123123123,
	// 		measurement: "88,5 ; 76 ; 90 ; 97;",
	// 		code: 19909
	// 	},
	// 	{
	// 		key: 5,
	// 		name: "Jeniffer Chen",
	// 		createdAt: "01/01/2020",
	// 		address: "Lorem ipsum dolor sit amet  consectetur.",
	// 		phoneNum: 123123123,
	// 		measurement: "88,5 ; 76 ; 90 ; 97; 17 - 18 / 23; 38 -38",
	// 		code: 19909
	// 	},
	// 	{
	// 		key: 6,
	// 		name: "Jeniffer Chen",
	// 		createdAt: "01/01/2020",
	// 		address: "Lorem ipsum dolor sit amet  consectetur adipiscing elit.",
	// 		phoneNum: 123123123,
	// 		measurement: "88,5 ; 76 ; 90 ; 97; 17 - 18 / 23; 38 -38 / 33; 55; 98",
	// 		code: 19909
	// 	},
	// ]

	const [items, setItems] = useState([]);

	const columns: IColumn[] = [
		{ key: 'column1', name: 'Kode', fieldName: 'id', minWidth: 100, maxWidth: 200, isResizable: true },
		{ key: 'column2', name: 'Nama', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
		{ key: 'column3', name: 'Ukuran', fieldName: 'size', minWidth: 100, maxWidth: 200, isResizable: true, isMultiline: true },
		{ key: 'column4', name: 'Tanggal Aktif', fieldName: 'createdAt', minWidth: 100, maxWidth: 200, isResizable: true },
		{ key: 'column5', name: 'Alamat', fieldName: 'address', minWidth: 100, maxWidth: 200, isResizable: true, isMultiline: true },
		{ key: 'column6', name: 'No. Telp', fieldName: 'phone', minWidth: 100, maxWidth: 200, isResizable: true },
	  ];

    const onRenderDetailsHeader = (detailsHeaderProps: IDetailsHeaderProps) => {
        detailsHeaderProps.styles = headerStyle;
        return <DetailsHeader { ...detailsHeaderProps}/>
	}

	useEffect( () => {
		if (items.length === 0) {
			getTopFiveClients().then((results:any) => {
				setItems(results);
			});
		}
	}, [])
	

    return (
        <>
            <SearchBox 
                placeholder=" cari disini ..." 
                underlined={true} labelText="Nama"
                styles={searchBoxStyle}
            />
            <DetailsList
                items={items}
                columns={columns}
                selectionMode={SelectionMode.none}
                onRenderDetailsHeader={onRenderDetailsHeader}
                layoutMode={DetailsListLayoutMode.justified}
            />
        </>
    )



}

export default Table;