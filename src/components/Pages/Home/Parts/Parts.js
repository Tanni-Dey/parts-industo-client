import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import Part from './Part/Part';

const Parts = () => {
    // const parts = [
    //     { _id: 1, name: 'Led Tv Inverter', des: 'Power supply condition input: support 10-28V DC input.Output voltage: automatic adaptation below 88V (minimum limit for input voltage, no depressurization) Output current: the default 80mA. Increases the current by shorting the R22 R21 R18 R15 R24 resistor. Each resistor 80mA. Highest 480mA.', img: 'https://5.imimg.com/data5/SELLER/Default/2022/5/QK/HX/QX/37106317/gold-97e-led-tv-inverter-250x250.jpg', price: 29, minOrderQ: 1000, aviableQuantiy: 250000 },
    //     { _id: 2, name: 'Led Tv Motherboard', des: 'HX 2.8 motherboard for better performance, Not for ultraslim tube,CQ 1265 and 765 STR kit,Sutiable fo 14 inch,15 inch,17inch,20inch,22inch and 24 inch CRT TV,buyer always remember this is not for ultraslim crt television', img: 'https://5.imimg.com/data5/SELLER/Default/2022/5/QK/HX/QX/37106317/gold-97e-led-tv-inverter-250x250.jpg', price: 29, minOrderQ: 1000, aviableQuantiy: 250000 },
    //     { _id: 3, name: 'Tv Mainboards Processor', des: 'Item Condition: UsedProcessor Brand: IntelApplication: DesktopModel Number: i5 3570Type: Quad-CoreCPU Frequency: 3.4 GHzProcessor Type: Intel CoreL2 Cache Capacity: 1 MB,6 MBL3 Cache Capacity: 8 MBPower: 77 WPackage: NoLaunch Date: 2012Chip Process: 22 nanometersMain Frequency: 3.4Number of Cores: Quad-Core64-Bit Support: YesInterface Type: LGA 1155,LGA 1155Brand Name: IntelIntel Model: Core i5 3570Socket Type: LGA1155', img: 'https://5.imimg.com/data5/SELLER/Default/2022/5/QK/HX/QX/37106317/gold-97e-led-tv-inverter-250x250.jpg', price: 29, minOrderQ: 1000, aviableQuantiy: 250000 }
    // ]

    const { data: parts, isLoading } = useQuery('tools', () => fetch('https://evening-eyrie-81850.herokuapp.com/tool').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='my-20 px-10 lg:px-20'>
            <h1 className='text-primary font-sans text-5xl uppercase'>parts of <span className='text-secondary'>tv</span></h1>
            <div className='grid grid-cols-1 gap-10 lg:grid-cols-3 mt-10'>
                {
                    parts.slice(0, 3).map(part => <Part
                        key={part._id}
                        part={part}
                    />)
                }
            </div>
        </div>
    );
};

export default Parts;