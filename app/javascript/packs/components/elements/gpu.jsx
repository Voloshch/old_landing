import React from "react";
import TitleSection from "packs/components/elements/title_section";
import CreateList from "packs/components/elements/create_list";
import LearnGpu from "packs/components/elements/learn_gpu";
import gpuАdv from "packs/constants/advantage_gpu";
import gpuUse from "packs/constants/use_gpu";
import { Translate } from "@davidqhr/react-i18nify";

const Gpu = () => {
  return (
    <section id="gpu-section">
      <div className="container">
        <TitleSection title={gpuUse.title} />
        <CreateList data={gpuUse} />
      </div>
      
      <LearnGpu />

      <div className="container">
        <Translate value="compute.gpu.titleCloud" className="section-title" tag="p" />
        <CreateList data={gpuАdv} />
      </div>
    </section>
  );
};

export default Gpu;
