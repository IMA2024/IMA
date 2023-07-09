import {
    Avatar,
    Badge,
    Table,
    Group,
    Text,
    ActionIcon,
    Anchor,
    ScrollArea,
    useMantineTheme,
   Title,
   Modal,
   Button,
   Center
  } from '@mantine/core';
  import { IconPencil, IconTrash, IconEye} from '@tabler/icons-react';
  import { useState } from 'react';
  import { useDisclosure } from '@mantine/hooks';
  
 

  const data = [
   
      {
        "avatar": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Usquare",
        "job": "MarketingAgent",
        "email": "rob_wolf@gmail.com",
        "phone": "+44 (452) 886 09 12"
      },
      {
        "avatar": "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Decimal Square",
        "job": "MarketingAgent",
        "email": "jj@breaker.com",
        "phone": "+44 (934) 777 12 76"
      },
      {
        "avatar": "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Multiple Solutions",
        "job": "MarketingAgent",
        "email": "henry@silkeater.io",
        "phone": "+44 (901) 384 88 34"
      },
      {
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Infinity Solutions",
        "job": "MarketingAgent",
        "email": "bhorsefighter@gmail.com",
        "phone": "+44 (667) 341 45 22"
      },
      {
        "avatar": "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Optimal Solutions",
        "job": "MarketingAgent",
        "email": "jeremy@foot.dev",
        "phone": "+44 (881) 245 65 65"
      }
    
    ];
  
  export default function RegisteredBusinesses() {
    const theme = useMantineTheme();
    const [tableData, setTableData] = useState(data);
    const [selectedItemName, setSelectedItemName] = useState(null);
    const [selectedItemJob, setSelectedItemJob] = useState(null);
    const [selectedItemEmail, setSelectedItemEmail] = useState(null);
    const [selectedItemPhone, setSelectedItemPhone] = useState(null);
    const [selectedItemPic, setSelectedItemPic] = useState(null);
    const [opened, { open, close }] = useDisclosure(false);
  

  const handleDeleteRow = (name) => {
    setTableData((prevData) => prevData.filter((row) => row.name !== name));
  };

  const rows = tableData.map((item) => (
      <tr key={item.name}>
        <td>
          <Group spacing="sm">
            <Avatar size={30} src={item.avatar} radius={30} />
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
          </Group>
        </td>
        
        <td>
          <Anchor component="button" size="sm">
            {item.email}
          </Anchor>
        </td>
        <td>
          <Text fz="sm" c="dimmed">
            {item.phone}
          </Text>
        </td>
        <td>
          <Text
            style={{color:'black'}}
          >
            {item.job}
          </Text>
        </td>
        <td>
          <Group spacing={0} position="right">
          <ActionIcon color="blue"  
           onClick={() => {
            open();
            setSelectedItemName(item.name);
            setSelectedItemJob(item.job);
            setSelectedItemPic(item.avatar);
            setSelectedItemEmail(item.email);
            setSelectedItemPhone(item.phone);
            
          }}
          >
              <IconEye size="1rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon>
              <IconPencil size="1rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon color="red"  onClick={() => handleDeleteRow(item.name)}>
              <IconTrash size="1rem" stroke={1.5} />
            </ActionIcon>
          </Group>
        </td>
      </tr>
    ));
  
    return (
      <div >
       
      <ScrollArea>
        <Title
        mt={40}
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Registered Businesses 
      </Title>
        <Table sx={{ minWidth: 600 }} verticalSpacing="sm" mt={20} >
          <thead>
            <tr>
              <th>Business Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Business Description</th>
              <th />
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
      <Modal  opened={opened} onClose={close}  size="lg"  style={{textAlign: "center", display:'flex', justifyContent:'center' }}>
      <div style={{display: 'flex', justifyContent: 'left', fontFamily: 'serif', fontWeight: 'bold', fontSize: 30}}>
            Business Details
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Avatar size={250} src={selectedItemPic} radius={30}   />
            </div>
            <div style={{fontFamily: 'serif', fontSize: 20, marginTop: 30}}>
              Name: <b> {selectedItemName} </b>
            </div>
            <div style={{fontFamily: 'serif', fontSize: 20, marginTop: 10}}>
              Role: <b> {selectedItemJob} </b>
            </div>
            <div style={{fontFamily: 'serif', fontSize: 20, marginTop: 10}}>
              Email: <b> {selectedItemEmail} </b>
            </div>
            <div style={{fontFamily: 'serif', fontSize: 20, marginTop: 10}}>
              Phone: <b> {selectedItemPhone} </b>
            </div>
      </Modal>
      </div>
    )
  }