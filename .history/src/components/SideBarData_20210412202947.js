import React from 'react';
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Home',
    path: '/Home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Lessons',
    path: '/Lessons',
    icon: <BsIcons.BsFillCollectionPlayFill/>,
    cName: 'nav-text'
  },
  {
    title: 'Quiz',
    path: '/Quiz',
    icon: <BsIcons.BsMusicNoteList />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/Settings',
    icon: <GiIcons.GiGears />,
    cName: 'nav-text'
  },
  
];