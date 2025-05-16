import '../App.css';
import griff from '../GriffCircleHead.png';
import ListOnTaskbar from './ListOnTaskbar';
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
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Griff Coyote </p>
        <img src={griff} alt="Griff" className="w-8 h-8 rounded-full" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
          About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="foreground" href="#">
            Art
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Schedule
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    
    </div>
    

    
    );
}

export default Taskbar;
