import styled from 'styled-components';
import * as palette from '../color';

const MenuItemStyle = styled.div`
    color: ${palette.lightCream};
    display: flex;
    font-family: Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.8rem;
    line-height: 3.5rem;
    list-style-type: none;
    margin-left: 20vw;
    margin-top:8rem;
    text-align: left;
    ul {
      list-style-type: none;
    }

    li:before {
      content: '';
      display: inline-block;
      width: 1.52em;
    }

    li.home {
      background-image: url(http://res.cloudinary.com/lucedesign/image/upload/v1529872332/home_u8rucz.svg);
      background-repeat: no-repeat;
      background-size: 1.3em;
      padding-left: 15px;
    }

    li.about {
      background-image: url(http://res.cloudinary.com/lucedesign/image/upload/v1529872317/about_jaopop.svg);
      background-repeat: no-repeat;
      background-size: 1.3em;
      padding-left: 15px;
    }

    li.projects {
      background-image: url(http://res.cloudinary.com/lucedesign/image/upload/v1529872337/projects_ip7orl.svg);
      background-repeat: no-repeat;
      background-size: 1.3em;
      padding-left: 15px;
    }

    li.contact {
      background-image: url(http://res.cloudinary.com/lucedesign/image/upload/v1529872325/contact_xeygow.svg);
      background-repeat: no-repeat;
      background-size: 1.3em;
      padding-left: 15px;
    }
`;

export default MenuItemStyle;