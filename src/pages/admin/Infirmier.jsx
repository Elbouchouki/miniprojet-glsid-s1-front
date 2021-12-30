import React ,{useState}from 'react'
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import { Popover ,Whisper,Checkbox,Dropdown,IconButton,Divider} from 'rsuite';
import { Gear } from '@rsuite/icons';
import ToolsIcon from '@rsuite/icons/Tools';
const NameCell = ({ rowData, dataKey, ...props }) => {
    const speaker = (
      <Popover title="Description">
        <p>
          <b>Name:</b> {`${rowData.firstName} ${rowData.lastName}`}{' '}
        </p>
        <p>
          <b>Email:</b> {rowData.email}{' '}
        </p>
        <p>
          <b>Company:</b> {rowData.companyName}{' '}
        </p>
        <p>
          <b>Sentence:</b> {rowData.sentence}{' '}
        </p>
      </Popover>
    );
  
    return (
      <Cell {...props}>
        <Whisper placement="top" speaker={speaker}>
          <a href='#asdasd'>{rowData[dataKey].toLocaleString()}</a>
        </Whisper>
      </Cell>
    );
  };
  
  const ImageCell = ({ rowData, dataKey, ...props }) => (
    <Cell {...props} style={{ padding: 0 }}>
      <div
        style={{
          width: 40,
          height: 40,
          background: '#f5f5f5',
          borderRadius: 20,
          marginTop: 2,
          overflow: 'hidden',
          display: 'inline-block'
        }}
      >
        <img src={rowData[dataKey]} width="40" alt='asdasd'/>
      </div>
    </Cell>
  );
  
  const CheckCell = ({ rowData, onChange, checkedKeys, dataKey, ...props }) => (
    <Cell {...props} style={{ padding: 0 }}>
      <div style={{ lineHeight: '46px' }}>
        <Checkbox
          value={rowData[dataKey]}
          inline
          onChange={onChange}
          checked={checkedKeys.some(item => item === rowData[dataKey])}
        />
      </div>
    </Cell>
  );
  
  const renderMenu = ({ onClose, left, top, className }, ref) => {
    const handleSelect = eventKey => {
      onClose();
      console.log(eventKey);
    };
    return (
      <Popover ref={ref} className={className} style={{ left, top }} full>
        <Dropdown.Menu onSelect={handleSelect}>
          <Dropdown.Item eventKey={3}>Download As...</Dropdown.Item>
          <Dropdown.Item eventKey={4}>Export PDF</Dropdown.Item>
          <Dropdown.Item eventKey={5}>Export HTML</Dropdown.Item>
          <Dropdown.Item eventKey={6}>Settings</Dropdown.Item>
          <Dropdown.Item eventKey={7}>About</Dropdown.Item>
        </Dropdown.Menu>
      </Popover>
    );
  };
  
  const ActionCell = ({ rowData, dataKey, ...props }) => {
    function handleAction() {
      alert(`id:${rowData[dataKey]}`);
    }
    return (
      <Cell {...props} className="link-group">
        <IconButton appearance="subtle" onClick={handleAction} icon={<Gear />} />
        <Divider vertical />
        <Whisper placement="autoVerticalStart" trigger="click" speaker={renderMenu}>
          <IconButton appearance="subtle" icon={<ToolsIcon />} />
        </Whisper>
      </Cell>
    );
  };

const Dashboard = () => {
    const data =[
        {
          "id": 1,
          "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=E",
          "city": "New Amieshire",
          "email": "Leora13@yahoo.com",
          "firstName": "Ernest Schuppe SchuppeSchuppeSchuppeSchuppeSchuppeSchuppe Schuppe",
          "lastName": "Schuppe",
          "street": "Ratke Port",
          "zipCode": "17026-3154",
          "date": "2016-09-23T07:57:40.195Z",
          "bs": "global drive functionalities",
          "catchPhrase": "Intuitive impactful software",
          "companyName": "Lebsack - Nicolas",
          "words": "saepe et omnis",
          "sentence": "Quos aut sunt id nihil qui.",
          "stars": 820,
          "followers": 70
        },
        {
          "id": 2,
          "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=J",
          "city": "New Gust",
          "email": "Mose_Gerhold51@yahoo.com",
          "firstName": "Janis",
          "lastName": "Vandervort",
          "street": "Dickinson Keys",
          "zipCode": "43767",
          "date": "2017-03-06T09:59:12.551Z",
          "bs": "e-business maximize bandwidth",
          "catchPhrase": "De-engineered discrete secured line",
          "companyName": "Glover - Hermiston",
          "words": "deleniti dolor nihil",
          "sentence": "Illo quidem libero corporis laborum.",
          "stars": 1200,
          "followers": 170
        }];
    const [checkedKeys, setCheckedKeys] = useState([]);
    let checked = false;
    let indeterminate = false;
    
    if (checkedKeys.length === data.length) {
        checked = true;
    } else if (checkedKeys.length === 0) {
        checked = false;
    } else if (checkedKeys.length > 0 && checkedKeys.length < data.length) {
        indeterminate = true;
    }
    
    const handleCheckAll = (value, checked) => {
        const keys = checked ? data.map(item => item.id) : [];
        setCheckedKeys(keys);
    }
    const handleCheck = (value, checked) => {
        const keys = checked ? [...checkedKeys, value] : checkedKeys.filter(item => item !== value);
        setCheckedKeys(keys);
    }
    return (
        <div>
            <h2 className="page-header">Infirmier</h2>
            <div className="row">
                <div className="card" style={{width:'100%'}}>
                    <Table height={300} data={data} id="table">
                        <Column width={50   } align="center">
                            <HeaderCell style={{ padding: 0 }}>
                            <div style={{ lineHeight: '40px' }}>
                                <Checkbox
                                inline
                                checked={checked}
                                indeterminate={indeterminate}
                                onChange={handleCheckAll}
                                />
                            </div>
                            </HeaderCell>
                            <CheckCell dataKey="id" checkedKeys={checkedKeys} onChange={handleCheck} />
                        </Column>
                        <Column width={100} align="center">
                            <HeaderCell>Avartar</HeaderCell>
                            <ImageCell dataKey="avartar" />
                        </Column>

                        <Column width={160}>
                            <HeaderCell>First Name</HeaderCell>
                            <NameCell dataKey="firstName" />
                        </Column>
                        <Column width={160}>
                            <HeaderCell>First Name</HeaderCell>
                            <NameCell dataKey="firstName" />
                        </Column>
                        <Column width={300}>
                            <HeaderCell>Email</HeaderCell>
                            <Cell>{rowData => <a href={`mailto:${rowData.email}`}>{rowData.email}</a>}</Cell>
                        </Column>

                        <Column width={200}>
                            <HeaderCell>Action</HeaderCell>
                            <ActionCell dataKey="id" />
                        </Column>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
