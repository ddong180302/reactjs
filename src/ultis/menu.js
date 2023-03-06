import icons from "./icons"

const { MdOutlineLibraryMusic, MdOutlineFeed, RiNeteaseCloudMusicFill, GiMusicSpell } = icons

export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icons: <MdOutlineLibraryMusic size={24} />
    },
    {
        path: '',
        text: 'Khám phá',
        end: true,
        icons: <GiMusicSpell size={24} />
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icons: <RiNeteaseCloudMusicFill size={24} />
    },
    {
        path: 'follow',
        text: 'Theo dõi',
        icons: <MdOutlineFeed size={24} />
    },
]