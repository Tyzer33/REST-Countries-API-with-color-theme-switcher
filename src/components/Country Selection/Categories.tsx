import React, { useContext, useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { SelectedRegionContext } from '../../context/SelectedRegionContext'
import { SelectedRegionContextValue } from '../../types'
import { breakpoints } from '../../styles/variables'
import { flex } from '../../styles/mixins'

const Selected = styled.button`
  ${flex('space-between', 'center')}
  height: 6rem;
  width: 25rem;
  border-radius: 0.6rem;
  padding: 0 2rem 0 3rem;
  font-size: 1.5rem;
  background: ${({ theme }) => theme.bgPrimary};
  box-shadow: ${({ theme }) => theme.shadow};
  cursor: pointer;

  @media ${breakpoints.desktop} {
    height: 3.5rem;
    width: 12.5rem;
    border-radius: 0.3rem;
    padding: 0 1rem 0 1.5rem;
    font-size: 0.9rem;
  }
`

type SvgProps = {
  $reversed: boolean
}

const Svg = styled.svg<SvgProps>`
  height: 2rem;
  fill: ${({ theme }) => theme.text};

  transform: ${({ $reversed }) => ($reversed ? 'rotate(0)' : 'rotate(180deg)')};

  @media ${breakpoints.desktop} {
    height: 1.2rem;
  }
`

const OptionsContainer = styled.div`
  position: absolute;
  width: 25rem;
  padding: 1.4rem 0;
  margin-top: 0.5rem;
  border-radius: 0.6rem;
  background: ${({ theme }) => theme.bgPrimary};
  box-shadow: ${({ theme }) => theme.shadow};
  z-index: 99;

  @media ${breakpoints.desktop} {
    width: 12.5rem;
    margin-top: 0.25rem;
    border-radius: 0.3rem;
    padding: 0.7rem 0;
  }
`

const Option = styled.button`
  font-size: 1.5rem;
  width: 100%;
  padding: 0.6rem 3rem;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  @media ${breakpoints.desktop} {
    padding: 0.3rem 1.5rem;
    font-size: 0.8rem;
  }
`

function Categories() {
  const [displayCategories, updateDisplayCategories] = useState(false)
  const { selectedRegion, updateSelectedRegion } = useContext(
    SelectedRegionContext
  ) as SelectedRegionContextValue
  const dropButton = useRef<HTMLButtonElement>(null)
  const options = useRef<HTMLDivElement>(null)

  function openClose() {
    updateDisplayCategories(!displayCategories)
  }

  const handleSelection = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!(e.target instanceof HTMLButtonElement) || e.target.textContent === null) return
    updateSelectedRegion(e.target.textContent)
    openClose()
  }

  useEffect(() => {
    function clickOutside(e: MouseEvent) {
      /* check if categories is open and if a click is made outside the dropdown button or the dropdown menu */
      if (!displayCategories) return
      if (dropButton.current === null || options.current === null) return
      if (!(e.target instanceof HTMLElement)) return
      if (dropButton.current.contains(e.target) || options.current.contains(e.target)) return

      updateDisplayCategories(false)
    }

    document.addEventListener('mousedown', clickOutside)

    // clean up function before running new effect
    return () => {
      document.removeEventListener('mousedown', clickOutside)
    }
  }, [displayCategories])

  return (
    <div>
      <Selected type="button" onClick={() => openClose()} ref={dropButton}>
        {selectedRegion === '' ? 'Filter by Region' : selectedRegion}
        <Svg $reversed={displayCategories} viewBox="0 0 24 24">
          <path d="M7.406 8.578l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z" />
        </Svg>
      </Selected>
      {displayCategories && (
        <OptionsContainer ref={options}>
          <Option type="button" onClick={handleSelection}>
            Africa
          </Option>
          <Option type="button" onClick={handleSelection}>
            Americas
          </Option>
          <Option type="button" onClick={handleSelection}>
            Asia
          </Option>
          <Option type="button" onClick={handleSelection}>
            Europe
          </Option>
          <Option type="button" onClick={handleSelection}>
            Oceania
          </Option>
          <Option type="button" onClick={handleSelection}>
            All
          </Option>
        </OptionsContainer>
      )}
    </div>
  )
}

export default Categories
