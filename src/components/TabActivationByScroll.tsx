import React from 'react';

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
        let sectionTops: number[] = [];

        for (let i = 0; i < this.props.sections.length; i++) {
            sectionTops.push(this.props.sections[i].current.offsetTop - this.props.sections[i].current.offsetHeight);
        }


        window.addEventListener("scroll", () => {
            let secTop = sectionTops[0];
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

    };

};

export default TabActivationByScroll