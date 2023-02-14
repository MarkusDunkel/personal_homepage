import { Box, Card, useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import { ReactNode } from 'react';

export interface section {
    current: any;
}
export interface sections extends Array<section> { }

export interface TabActivationByScrollProps {
    sections: sections;
    setTabIndex: (newTabIndex: string | Boolean) => void;
}


class TabActivationByScroll extends React.Component<TabActivationByScrollProps> {
    state = { tabs: [false, 'about', 'project', 'contact'] };

    render() {
        return (null);
    }

    componentDidMount() {
        // console.log('sections after mount', this.props.sections);
        // console.log(this.props.sections[0].current.offsetTop);

        let sectionTops: number[] = [];

        for (let i = 0; i < this.props.sections.length; i++) {
            console.log(this.props.sections[i].current.offsetTop + this.props.sections[i].current.offsetHeight);
            sectionTops.push(this.props.sections[i].current.offsetTop - this.props.sections[i].current.offsetHeight);
        }


        window.addEventListener("scroll", () => {
            let secTop = sectionTops[0];
            console.log('secTop', secTop)
            let i = 0;
            while (window.scrollY > secTop) {
                secTop = sectionTops[i];
                i++;
            }
            this.props.setTabIndex(this.state.tabs[i - 1]);
            console.log('sectionTops', sectionTops)
            console.log('window.scrollY', window.scrollY)
            console.log('secTop', secTop)
        });


        // window.addEventListener("scroll", () => {
        //     let secTop = 100000;
        //     while (window.scrollY < secTop) {
        //         for (let i = 0; i < this.props.sections.length; i++) { secTop = sectionTops[i] }
        //     }
        //     console.log(secTop)
        // });

    };

    // console.log('graz:');
    // let sectionTops: number[] = [];

    // for (let i = 0; i < sections.length; i++) {
    //     console.log(sections[i].current.offsetTop);
    //     sectionTops.push(sections[i].current.offsetTop);
    // }


    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         let secTop = 100000;
    //         while (window.scrollY < secTop) {
    //             for (let i = 0; i < sections.length; i++) { secTop = sectionTops[i] }
    //         }
    //         console.log(secTop)
    //     });
    // });

};

export default TabActivationByScroll