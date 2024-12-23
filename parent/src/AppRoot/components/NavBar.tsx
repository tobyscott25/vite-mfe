import { Box, Flex, Image, Text } from "@chakra-ui/react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";

interface NavLink {
  href: string;
  text: string;
}

const navLinks: NavLink[] = [
  { href: "/", text: "Parent Home" },
  { href: "/asd", text: "Parent 404" },
  { href: "/mfe1", text: "MFE1" },
  { href: "/mfe1/asd", text: "MFE1 404" },
  { href: "/mfe2", text: "MFE2" },
  { href: "/mfe2/asd", text: "MFE2 404" },
];

export function NavBar() {
  return (
    <Box as={"nav"} bg={"gray.100"} p={4} textAlign={"center"}>
      <Text fontSize={"lg"} mb={10}>
        Vite microfrontends demo
      </Text>
      <Flex justifyContent={"space-around"}>
        <Image width={50} src={viteLogo} alt="Vite logo" />
        <Image width={50} src={reactLogo} alt="React logo" />
      </Flex>

      <ul>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </Box>
  );
}
