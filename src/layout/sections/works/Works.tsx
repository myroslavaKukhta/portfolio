import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, tabsStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/proj_1.png'
import Timer from './../../../assets/images/proj_2.png'
import {Container} from "../../../components/Container";
import {S} from './Works_Styles';
import {AnimatePresence, motion} from "framer-motion"

const tabsItems: Array<{
    status: tabsStatusType,
    title: string
}> = [
    {
        title: "all",
        status: "all",
    },
    {
        title: "landing",
        status: "landing",
    },
    {
        title: "react",
        status: "react",
    },
    {
        title: "spa",
        status: "spa",
    },
]

const worksData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor",
        type: "spa",
        id: 1
    },
    {
        title: "Timer",
        src: Timer,
        text: "lisks ipsum dolor amet",
        type: "react",
        id: 2
    },

]

// const tabsItems = ["all", "landing page", "react", "spa"]
export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    }

    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }

    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus(value: tabsStatusType) {
        setCurrentFilterStatus(value);
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>
                    My works
                </SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    <AnimatePresence>
                        {filteredWorks.map((w) => {
                            return (
                                <motion.div
                                    style={{width: "330px", flexGrow: 1, maxWidth: "540px"}}
                                    layout
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    key={w.id}
                                >
                                    <Work title={w.title}
                                          text={w.text}
                                          src={w.src}
                                          key={w.id}
                                    />
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};



