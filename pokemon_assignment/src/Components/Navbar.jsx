import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import { Listing } from '../Pages/Listing'
import { Details } from '../Pages/Details'
import { Searching } from '../Pages/Searching'
import { Bookmarks } from '../Pages/Bookmarks'

export const Navbar = () => {
  return (
    <Box>
        <Tabs variant='enclosed'>
        <TabList>
            <Tab>Listing Page</Tab>
            <Tab>Details Page</Tab>
            <Tab>Search Page</Tab>
            <Tab>Bookmark Page</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
            {/* <p>Listing</p> */}
            <Listing/>
            </TabPanel>
            <TabPanel>
            {/* <p>Details</p> */}
            <Details/>
            </TabPanel>
            <TabPanel>
            {/* <p>Search</p> */}
            <Searching/>
            </TabPanel>
            <TabPanel>
            {/* <p>Bookmark</p> */}
            <Bookmarks/>
            </TabPanel>
        </TabPanels>
        </Tabs>
    </Box>
  )
}
