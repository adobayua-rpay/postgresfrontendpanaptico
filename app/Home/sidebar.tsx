// @ts-nocheck

"use client";
import { currentUser } from "@clerk/nextjs";
// import { UserProfile } from "@clerk/nextjs";

import {
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SideNavLink,
  HeaderContainer,
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from "@carbon/react";
import {
  Search,
  Notification,
  AppConnectivity,
  Fade,
  Network_3,
  ChartNetwork,
  Archive,
  DataCenter,
  Switcher as SwitcherIcon,
} from "@carbon/icons-react";
import UserProfile from '../user-profile/page'
// import '@carbon/charts/styles.css';
export const SideNavRailWHeader = (args) => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <>
        <Header aria-label="IBM Platform Name">
          <HeaderMenuButton
            aria-label={isSideNavExpanded ? "Close menu" : "Open menu"}
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
            aria-expanded={isSideNavExpanded}
          />
          <HeaderName href="#" prefix="Panaptico">
            [Account]
          </HeaderName>
          <HeaderNavigation aria-label="IBM [Platform]">
            <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
            <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
              <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
              <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
              <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
            </HeaderMenu>
          </HeaderNavigation>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Search">
              <Search size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="Notifications">
              <Notification size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction
            >
             <UserProfile />
            </HeaderGlobalAction>
            <HeaderGlobalAction
  aria-label="App Switcher"
  style={{
    flex: 1,
    justifyContent: 'flex-end',
  }}
>
  <UserProfile />
</HeaderGlobalAction>
          </HeaderGlobalBar>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            onOverlayClick={onClickSideNavExpand}
            href="#main-content"
            onSideNavBlur={onClickSideNavExpand}
            isRail
            {...args}
          >
            <SideNavItems>
              {isSideNavExpanded && (
                <HeaderSideNavItems hasDivider={true}>
                  <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                  <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                  <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                  <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                    <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                    <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                    <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                  </HeaderMenu>
                </HeaderSideNavItems>
              )}

              <SideNavLink renderIcon={Fade} href="https://www.carbondesignsystem.com/">
                Clusters
              </SideNavLink>
              <SideNavLink renderIcon={Fade} href="https://www.carbondesignsystem.com/">
                Organization
              </SideNavLink>
              <SideNavLink renderIcon={Fade} href="https://www.carbondesignsystem.com/">
                Settings
              </SideNavLink>
              <SideNavLink renderIcon={Fade} href="https://www.carbondesignsystem.com/">
                Support
              </SideNavLink>
              <SideNavLink renderIcon={Fade}>
                <UserProfile />
              </SideNavLink>
            </SideNavItems>
          </SideNav>
          
        </Header>

      </>
    )}
  />
);

export default SideNavRailWHeader;