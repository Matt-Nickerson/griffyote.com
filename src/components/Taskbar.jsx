import '../App.css';
import griff from '../GriffCircleHead.png';
import {Navbar,
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
} from '@heroui/navbar';
import {Link} from '@heroui/link';
import {Button} from '@heroui/button';

function Taskbar() {


  return (
    <div>
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
      <img src={griff} alt="Griff" className=" mr-2 w-8 h-8 rounded-full" />
        <p className="font-semibold text-inherit">Griff Coyote </p>
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
          <Button radius="full" className='bg-[#AD483C]' href="/Contact"  variant="shadow">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar> 
    </div>
    );
}

export default Taskbar;
