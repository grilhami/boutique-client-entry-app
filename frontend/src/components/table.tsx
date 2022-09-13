import React from 'react';
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
import { getClients } from '../helper/api/client';
import { IClientGet, IClientItem } from '../helper/api/interfaces';

const headerStyle= { 
	root: { paddingTop: 0 }
}

const searchBoxStyle = { 
	root: { width: "40%" }
}

interface Prop {
	items: IClientGet[];
}

const Table: React.FunctionComponent<Prop> = ({items}) => {

	console.log(items);
	const allItems = [
		{
			
		   "id":"client11",
		   "name":"Hayley Butterfield",
		   "size":"88,5 ; 76 ; 90 ; 97;",
		   "address":"Civic Center, 50 Stiles Way Antrim, BT41 2UB",
		   "phone":"01214960293",
		   "_ts":"1970-01-20"
		},
		{
			
		   "id":"client10",
		   "name":"Jenifer Chen",
		   "size":"88,5 ; 76 ; 90 ; 97; ",
		   "address":"JL. Kebon Jeruk No. 1 Jakarta Barat 11510",
		   "phone":"081234567890",
		   "_ts":"1970-01-20"
		},
		{
			
		   "id":"client9",
		   "name":"Jenifer Chen",
		   "size":"88,5 ; 76 ; 90 ; 97; ",
		   "address":"JL. Kebon Jeruk No. 1 Jakarta Barat 11510",
		   "phone":"081234567890",
		   "_ts":"1970-01-20"
		},
		{
			
		   "id":"client8",
		   "name":"Jenifer Chen",
		   "size":"88,5 ; 76 ; 90 ; 97; ",
		   "address":"JL. Kebon Jeruk No. 1 Jakarta Barat 11510",
		   "phone":"081234567890",
		   "_ts":"1970-01-20"
		},
		{
		   "id":"client7",
		   "name":"Jenifer Chen",
		   "size":"88,5 ; 76 ; 90 ; 97; ",
		   "address":"JL. Kebon Jeruk No. 1 Jakarta Barat 11510",
		   "phone":"081234567890",
		   "_ts":"1970-01-20"
		}
	 ]
	

	const columns: IColumn[] = [
		{ key: 'column1', name: 'Kode', fieldName: 'id', minWidth: 100, maxWidth: 200, isResizable: true },
		{ key: 'column2', name: 'Nama', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
		{ key: 'column3', name: 'Ukuran', fieldName: 'size', minWidth: 100, maxWidth: 200, isResizable: true, isMultiline: true },
		{ key: 'column4', name: 'Tanggal Aktif', fieldName: '_ts', minWidth: 100, maxWidth: 200, isResizable: true },
		{ key: 'column5', name: 'Alamat', fieldName: 'address', minWidth: 100, maxWidth: 200, isResizable: true, isMultiline: true },
		{ key: 'column6', name: 'No. Telp', fieldName: 'phone', minWidth: 100, maxWidth: 200, isResizable: true },
	  ];

    const onRenderDetailsHeader = (detailsHeaderProps: IDetailsHeaderProps) => {
        detailsHeaderProps.styles = headerStyle;
        return <DetailsHeader { ...detailsHeaderProps}/>
	}

	// useEffect( () => {
	// 	const getData = async () => {
	// 		const data: IClientGet[] = await getClients();
	// 		setItems(data);
	// 	}
	// 	getData();
	// }, [])
	

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