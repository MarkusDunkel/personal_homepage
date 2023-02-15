import React from 'react';
import { vh } from './NavBar';

declare global {
    interface Window { sectionTops: number[]; }
}

interface section {
    current: any;
}
interface sections extends Array<section> { }

interface TabActivationByScrollProps {
    sections: sections;
    setTabIndex: (newTabIndex: string | Boolean) => void;
}
interface TabActivationByScrollState {
    tabs: Array<boolean | string>;
}

const getSectionTops: (sectionsArr: any[]) => number[] = (sectionsArr) => {
    const sectionTops: number[] = [];
    for (let i = 0; i < sectionsArr.length; i++) {
        sectionTops.push(sectionsArr[i].current.offsetTop - vh(50));
        // }
    }
    return (sectionTops);
}

class TabActivationByScroll extends React.Component<TabActivationByScrollProps, TabActivationByScrollState> {
    constructor(props: TabActivationByScrollProps) {
        super(props);
        this.state = {
            tabs: [false, 'about', 'project', 'contact'],
        };
    }

    render() {
        return (null);
    }

    componentDidMount() {
        window.sectionTops = getSectionTops(this.props.sections);

        window.addEventListener("scroll", () => {
            let secTop = window.sectionTops[0];
            let i = 0;
            while (window.scrollY > secTop) {
                secTop = window.sectionTops[i];
                i++;
            }
            this.props.setTabIndex(this.state.tabs[i - 1]);
        });

    };

    componentDidUpdate() {
        window.sectionTops = getSectionTops(this.props.sections);
    }

};

export default TabActivationByScroll