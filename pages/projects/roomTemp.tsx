import { BentoBoxGridItem } from "../../components/BentoItemBox";
import Layout from "../../components/Layout";
import { SiUnity, SiArduino, SiMqtt, SiEclipsemosquitto } from "react-icons/si";
import SkillBadge from "../../components/SkillBadge";
import { CSharpSkillBadge, NavBox, LinkedInBox, GithubBox } from "../../components/BoxUtil";
import VideoPlayer from "../../components/VideoPlayer";

export default function MinimapPage() {

    const roomTemp1 = "https://res.cloudinary.com/drqmbimij/video/upload/v1794951855/20261117_154618_2_hsygfm.mp4"

    const projectsForBentoGrid: BentoBoxGridItem[] = [
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3 lg:row-span-3",
            content: (
                <>
                <h2 className= "text-xl font-semibold mb-2" > VIDEOS </h2>
                < div className="flex-1 rounded-lg overflow-hidden" >
                <VideoPlayer videos={ [roomTemp1]} />

                </div>
        </>
            ),
},
{
    colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2 lg:row-span-1", backgroundColor: 'bg-red-600',
        content: (
            <>
            <h2 className= "text-4xl font-black text-white mb-2" > Room Temperature Digital Twin </h2>

            < p className = "flex-1 text-white" > 2026 </p>
                </>
            ),
},

{
    colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1 lg:row-span-2", backgroundColor: 'bg-[#b9e158]',
        content: (
            <div>

            <div>
            <h2 className= "text-xl font-semibold mb-2" > STACK </h2>
            < div className = 'flex flex-row gap-2 xl:gap-4 flex-wrap' >
        <SkillBadge icon={ <SiUnity size = { 18 } color = "#FFFFFF" />} label = "UNITY" invert />
            <SkillBadge icon={ <SiArduino size = { 18 } color = "#00878F" />} label = "Arduino" />
                <SkillBadge icon={ <SiMqtt size = { 18 } color = "#660066" />} label = "MQTT" />
                    <SkillBadge icon={
        <SiEclipsemosquitto size = { 18 } color = "#3C5280" />} label = "Mosquitto" />
                    </div>

                    </div>

                    </div>
            ),
        },

GithubBox('https://github.com/kowright/temperature-humidity-digital-twin'),
    LinkedInBox(false),
{
    colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2 lg:row-span-1 xl:row-span-1", backgroundColor: 'bg-[#F5918D]',
        content: (
            <div>
            <h2 className= "text-xl font-semibold" > IMPACT </h2>
        < p > Demonstrates physical to digital end to end pipeline </p>
    <p>Created better understanding of hardware & TCP protocols
 </p>
           

                </div>
            ),
},



NavBox('PROJECTS', '/projects', 'bg-[#779e1c]', 'View Projects Page', true),




    {
        colSpanClass: "col-span-2 lg:col-span-5", rowSpanClass: "row-span-3 lg:row-span-2 xl:row-span-1", backgroundColor: 'bg-[#f76135]',
        content: (
            <div>
            <h2 className= "text-xl font-semibold mb-2 text-white" > WHAT </h2>
            < div className='lg:space-y-4 space-y-2' >

        <p className="text-white">
            Realtime environmental digital twin streaming live sensor temperature/humidity telemetry data from a physical room into a digital 3D room. 
            </p>
            <p className="text-white">
             Blue sphere measures humidity. Red capsule measures temperature. The sphere and capsule change color from cold (blue) to hot (warm) when their respective values change in the real world as seen in the video when a blow dryer warms up the sensor. 
            </p>


    </div>
    </div>
            ),
        },





{
    colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1 lg:row-span-2 xl:row-span-1", backgroundColor: 'bg-[#FCBB21]',
        content: (
            <div>
            <h2 className= "text-xl font-semibold text-black" > WHY </h2>
            < div className = 'lg:space-y-4 space-y-2' >


                    <p className="text-black">To understand how to translate real time physical data into the digital with hardware</p>

                                        </div>
                                        </div>
            ),
},





    ];

return (
    <Layout items= { projectsForBentoGrid } />
    );
}