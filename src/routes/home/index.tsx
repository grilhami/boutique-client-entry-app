import { h } from 'preact';
import style from './style.css';
import Header from '../../components/header'
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { 
	DetailsList, 
	SelectionMode, 
	DetailsHeader,  
	DetailsListLayoutMode, 
	IDetailsHeaderProps, 
	IColumn 
} from '@fluentui/react/lib/DetailsList';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { PrimaryButton } from '@fluentui/react/lib/Button';

const stackTokens = { childrenGap: 50 };
const stackStyles: Partial<IStackStyles> = { root: { width: "100%" } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: "100%" } },
}

const headerStyle= { 
	root: { paddingTop: 0 }
}

const searchBoxStyle = { 
	root: { width: "40%" }
}

const buttonStyle = {
	root: { width: "30%" }
}

const addIcon = { iconName: "Add" }

const textFieldStyle = {
	root: { width: "80%", marginTop: 20 }
}

const Home = () => {

	const items = [
		{
			key: 1,
			name: "Jeniffer Chen",
			createdAt: "01/01/2020",
			address: "Lorem ipsum dolor sit amet  consectetur adipiscing elit.",
			phoneNum: 123123123,
			measurement: "88,5 ; 76 ; 90 ; 97; 17 - 18 / 23; 38 -38 / 33; 55; 98",
			code: 19909
		},
		{
			key: 2,
			name: "Jeniffer Chen",
			createdAt: "01/01/2020",
			address: "Lorem ipsum.",
			phoneNum: 123123123,
			measurement: "88,5 ; 76 ; 90 ; 97;",
			code: 19909
		},
		{
			key: 3,
			name: "Jeniffer Chen",
			createdAt: "01/01/2020",
			address: "Lorem ipsum.",
			phoneNum: 123123123,
			measurement: "88,5 ; 76 ; 90 ; 97;",
			code: 19909
		},
		{
			key: 4,
			name: "Jeniffer Chen",
			createdAt: "01/01/2020",
			address: "Lorem ipsum.",
			phoneNum: 123123123,
			measurement: "88,5 ; 76 ; 90 ; 97;",
			code: 19909
		},
		{
			key: 5,
			name: "Jeniffer Chen",
			createdAt: "01/01/2020",
			address: "Lorem ipsum dolor sit amet  consectetur.",
			phoneNum: 123123123,
			measurement: "88,5 ; 76 ; 90 ; 97; 17 - 18 / 23; 38 -38",
			code: 19909
		},
		{
			key: 6,
			name: "Jeniffer Chen",
			createdAt: "01/01/2020",
			address: "Lorem ipsum dolor sit amet  consectetur adipiscing elit.",
			phoneNum: 123123123,
			measurement: "88,5 ; 76 ; 90 ; 97; 17 - 18 / 23; 38 -38 / 33; 55; 98",
			code: 19909
		},
	]

	const columns: IColumn[] = [
		{ key: 'column1', name: 'Kode', fieldName: 'code', minWidth: 100, maxWidth: 200, isResizable: true },
		{ key: 'column2', name: 'Nama', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
		{ key: 'column3', name: 'Ukuran', fieldName: 'measurement', minWidth: 100, maxWidth: 200, isResizable: true, isMultiline: true },
		{ key: 'column4', name: 'Tanggal Aktif', fieldName: 'createdAt', minWidth: 100, maxWidth: 200, isResizable: true },
		{ key: 'column5', name: 'Alamat', fieldName: 'address', minWidth: 100, maxWidth: 200, isResizable: true, isMultiline: true },
		{ key: 'column6', name: 'No. Telp', fieldName: 'phoneNum', minWidth: 100, maxWidth: 200, isResizable: true },
	  ];

	const onRenderDetailsHeader = (detailsHeaderProps: IDetailsHeaderProps): h.JSX.Element => {
		detailsHeaderProps.styles = headerStyle;
		return <DetailsHeader { ...detailsHeaderProps}/>
	}

	return (
		<div class={style.home}>
			<Header />
			<Stack horizontal tokens={stackTokens} styles={stackStyles}>
				<Stack {...columnProps}>
					<TextField label="Nama" styles={textFieldStyle}/>
					<TextField label="No. Telpon" styles={textFieldStyle} />
					<TextField label="Aalamat" styles={textFieldStyle} />
					<TextField label="Ukuran" styles={textFieldStyle} />
					<PrimaryButton 
						text='Tambah'
						styles={buttonStyle}
						iconProps={addIcon}
					/>
				</Stack>
				<Stack {...columnProps}>
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
				</Stack>
			</Stack>
		</div>
	);
}

export default Home;
