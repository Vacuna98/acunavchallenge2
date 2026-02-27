"use client"
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";
import React from 'react'


const NavLink = () => {
  return (

      <Navbar fluid rounded className="bg-pink-600!">
          <NavbarBrand>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Influential Person</span>
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
          
            <NavbarLink href="/">Home</NavbarLink>
            <NavbarLink href="/pages/who">Who</NavbarLink>
            <NavbarLink href="/pages/about">About</NavbarLink>
            <NavbarLink href="/pages/impact">Impact</NavbarLink>
          </NavbarCollapse>
        </Navbar>
  )
}

export default NavLink