import React from "react";
import gpuLearn from "packs/constants/learn_gpu";
import { Translate } from "@davidqhr/react-i18nify";

const LearnGpu = () => {
  return (
    <div className="learn">
      <div className="learn-wrapper container">
        <div className="learn-item">
          <Translate value={gpuLearn.title} className="learn-item__title" tag="p" />
          <Translate value={gpuLearn.description} className="learn-item__desctime" tag="p" />
          <Translate value={gpuLearn.descriptionTime} className="learn-item__desctime" tag="p" />
        </div>
        <div className="learn-item">
          <Translate value={gpuLearn.descriptionSpeed} className="learn-item__name" tag="p" />
          <img className="learn-item__img" src={gpuLearn.img} />
          <Translate value={gpuLearn.descriptionPerfor} className="learn-item__subtitle" tag="p" />
          <Translate value={gpuLearn.descriptionCpu} className="learn-item__cpu" tag="p" />
        </div>
      </div>
    </div>
  );
};

export default LearnGpu;
