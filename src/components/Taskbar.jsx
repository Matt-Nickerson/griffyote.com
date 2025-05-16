import '../App.css';
import griff from '../GriffCircleHead.png';
import {Image} from '@heroui/image';
import {Navbar,
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from '@heroui/navbar';
import {Link} from '@heroui/link';
import {Button} from '@heroui/button';
import {useState} from 'react';

function Taskbar() {


  return (
    <div>
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-semibold text-inherit">Griff Coyote </p>
        <img src={griff} alt="Griff" className=" ml-2 w-8 h-8 rounded-full" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/About" >
          About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/Art" >
            Art
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/Portfolio" >
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/Schedule" >
            Schedule
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button variant="shadow" color="primary">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar> 
    </div>
    );
}

export default Taskbar;
