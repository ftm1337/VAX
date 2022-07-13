import React, { useRef } from 'react'
import { Info, MessageCircle, Send, Twitter } from 'react-feather'
import styled from 'styled-components'
import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import useToggle from '../../hooks/useToggle'
import Nomics from '../../assets/svg/nomics.svg'
import MtvScout from '../../assets/images/mtvscout.png'
import DefiLlama from '../../assets/svg/defillama.svg'
import Debank from '../../assets/svg/debank.svg'
import Governance from '../../assets/svg/governance.svg'
import MtvGuru from '../../assets/images/mtvguru.png'
import Grain from '../../assets/svg/grain.svg'

import { ExternalLink } from '../../theme'

const StyledMenuIcon = styled(MenuIcon)`
  path {
    stroke: ${({ theme }) => theme.text1};
  }
`

const StyledMenuButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: ${({ theme }) => theme.bg3};

  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => theme.bg4};
  }

  svg {
    margin-top: 2px;
  }
`

const StyledMenu = styled.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`

const MenuFlyout = styled.span`
  min-width: 10.125rem;
  background-color: ${({ theme }) => theme.bg3};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  top: 3rem;
  right: 0rem;
  z-index: 100;
`

const MenuItem = styled(ExternalLink)`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({ theme }) => theme.text2};
  :hover {
    color: ${({ theme }) => theme.text1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`

//const CODE_LINK = 'https://github.com/Uniswap/uniswap-interface'

export default function Menu() {
  const node = useRef<HTMLDivElement>()
  const [open, toggle] = useToggle(false)

  useOnClickOutside(node, open ? toggle : undefined)

  return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    <StyledMenu ref={node as any}>
      <StyledMenuButton onClick={toggle}>
        <StyledMenuIcon />
      </StyledMenuButton>
      {open && (
        <MenuFlyout>
          <MenuItem id="link" href="https://vax.mtv.guru">
            <Info size={14} />
            About
          </MenuItem>
          <MenuItem id="link" href="https://app.relaychain.com/#/cross-chain-bridge-transfer">
            🌉  Bridge
          </MenuItem>
          <MenuItem id="link" href="https://mtv.guru/LF">
            <img src={MtvGuru} alt="mtv.guru/LF" width="14px" style={{ marginRight: '0.5rem' }} />
            Farmland
          </MenuItem>
          <MenuItem id="link" href="https://mtv.guru/GRAIN">
            <img src={Grain} alt="mtv.guru/GRAIN" width="14px" style={{ marginRight: '0.5rem' }} />
            Kompound
          </MenuItem>
          <MenuItem id="link" href="https://dao.ftm.guru">
            <img src={Governance} alt="ELITE DAO" width="14px" style={{ marginRight: '0.5rem' }} />
            Governance
          </MenuItem>
          <MenuItem id="link" href="https://debank.com/profile/Guru">
            <img src={Debank} alt="GURU@debank" width="14px" style={{ marginRight: '0.5rem' }} />
            Treasury
          </MenuItem>
          <MenuItem id="link" href="https://nomics.com/exchanges/vax/markets">
            <img src={Nomics} alt="nomics.com/exchanges/vax/markets" width="14px" style={{ marginRight: '0.5rem' }} />
            Vax-o-Nomics
          </MenuItem>
          <MenuItem id="link" href="https://defillama.com/protocol/vax">
            <img src={DefiLlama} alt="defillama.com/protocol/vax" width="14px" style={{ marginRight: '0.5rem' }} />
            DefiLlama
          </MenuItem>
          <MenuItem id="link" href="https://mtvscout.com/search-results?q=VAX">
            <img src={MtvScout} alt="VAX@mtvscout" width="14px" style={{ marginRight: '0.5rem' }} />
            Mtvscout
          </MenuItem>
          <MenuItem id="link" href="https://twitter.com/FTM1337">
            <Twitter size={14} />
            Twitter
          </MenuItem>
          <MenuItem id="link" href="https://discord.gg/QpyfMarNrV">
            <MessageCircle size={14} />
            Discord
          </MenuItem>
          <MenuItem id="link" href="https://t.me/VAXDEX">
            <Send size={14} />
            Telegram
          </MenuItem>
        </MenuFlyout>
      )}
    </StyledMenu>
  )
}
