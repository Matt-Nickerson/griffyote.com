import '../App.css';
import griff from '../GriffCircleHead.png';
import {Navbar,
    NavbarBrand, 
    NavbarContent, 
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from '@heroui/navbar';
import {Link} from '@heroui/link';
import {Button} from '@heroui/button';
import {useState} from 'react';

function Taskbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { name: 'About', href: '/About' },
        { name: 'Art', href: '/Art' },
        { name: 'Portfolio', href: '/Portfolio' },
        { name: 'Schedule', href: '/Schedule' },
        { name: 'Contact', href: '/Contact' },
    ]

  return (
    <div>
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      <NavbarBrand>
        <Link color="foreground" href="/About">
      <img src={griff} alt="Griff" className=" mr-2 w-8 h-8 rounded-full"/>
        <p className="font-semibold text-inherit">Griff Coyote </p>
        </Link>
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
          <Button className='bg-[#AD483C]' href="/Contact"  variant="shadow">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
       <NavbarMenu className='dark'>
        {menuItems.map((item, i) => (
          <NavbarMenuItem key={i}>
            <Link
              className="text-white"
              href={item.href}

              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar> 
    </div>
    );
}

export default Taskbar;
