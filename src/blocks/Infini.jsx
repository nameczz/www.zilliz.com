import React, { useState } from "react";
import structure from "../images/structure.png";
import f1 from "../images/icon-feature-1.png";
import f2 from "../images/icon-feature-2.png";
import f3 from "../images/icon-feature-3.png";
import s1 from "../images/icon-solution-1.png";
import s2 from "../images/icon-solution-2.png";
import s3 from "../images/icon-solution-3.png";

import "./Infini.scss";

const Infini = ({ data, locale }) => {
  const [solutionTab, setSolutionTab] = useState(0);
  const onTabClick = tab => {
    setSolutionTab(tab);
  };

  return (
    <section className="infini">
      <section className="landing">
        <h3>
          Infini Analytics <br />
          超大规模数据科学平台
        </h3>
        <p>
          使用 GPU
          的大规模并行处理和视觉渲染能力进行数据可视化呈现。与传统方案相比，
          Infini Analytics
          平台具备高吞吐、高性价比、低延时三重优势，单位算力成本降至传统方案的
          10% 。
        </p>
        <a
          rel="noopener noreferrer"
          className="button"
          href="http://infini-analytics.github.io/"
          target="_blank"
        >
          文档
        </a>
      </section>

      <section className="features" id="features">
        <h2>对十亿级数据集进行查询和可视化交互秒内响应</h2>

        <h3>Infini Analytics 特性</h3>
        <ul>
          <li>
            <img src={f1} width="180" alt="开放" />
            <h4>开放</h4>
            <p>
              将传统数据分析，数据科学算法以及基于时空数据分析的智能工作流程融合在同一个开放平台。
              产品支持原生SQL查询和交互式可视化分析能力，同时具备整合强大的机器学习框架的良好扩展性。
            </p>
          </li>

          <li>
            <img src={f2} width="180" alt="高效" />
            <h4>高效</h4>
            <p>
              充分利用CPU或GPU硬件的并行性计算能力。无需索引、预聚合或采样等预处理就能实现对企业中最大数据集的SQL查询和可视化交互分析。
            </p>
          </li>

          <li>
            <img src={f3} width="180" alt="清晰" />
            <h4>清晰</h4>
            <p>
              融合空间和时间数据的分析，能够帮您洞见事件全貌，不仅是发生了什么，更能了解发生的时间、地点。
              精细粒度的地理空间和时间序列数据的可视化使您能够看清数据的大海和海里的每一滴水。
            </p>
          </li>
        </ul>
      </section>

      <section className="arch" id="arch">
        <h3>Infini Analytics 架构与组件</h3>
        <div className="content">
          <img src={structure} alt="Infini Analytics 架构与组件" />
        </div>
      </section>

      <section className="solution" id="solution">
        <h3>解决方案</h3>
        <p className="leading">
          Infini Analytics 使用 GPU
          的大规模并行处理和视觉渲染能力进行数据可视化呈现。与传统方案相比，Infini
          Analytics
          平台具备高吞吐、高性价比、低延时三重优势，单位算力成本降至传统方案的
          10% 。用户可以对十亿级数据集进行查询和可视化交互，并获得秒内响应。
        </p>

        <ul className="tab">
          <li
            className={solutionTab === 0 ? "current" : ""}
            onClick={() => {
              onTabClick(0);
            }}
          >
            物流
          </li>
          <li
            className={solutionTab === 1 ? "current" : ""}
            onClick={() => {
              onTabClick(1);
            }}
          >
            电信
          </li>
        </ul>
        {solutionTab === 0 && (
          <ul className="tab-content">
            <li>
              <img src={s1} width="180" alt="问题" />
              <h5>问题</h5>
              <p>
                随着车辆运行数据和供应链管理数据的急剧增加，出现了提高物流行业效率和客户体验的新机遇。物流领导者希望在最短的时间里得出关于如何减少燃油消耗，提高操作员安全性，降低维护成本，优化车辆利用率的战略决策。
              </p>
            </li>
            <li>
              <img src={s2} width="180" alt="方案" />
              <h5>方案</h5>
              <p>
                Infini
                时空数据分析平台为物流行业提供了从生产线到最后一公里的全供应链分析能力，为数据分析师提供了对数十亿行车辆运行数据和供应链管理数据进行实时分析的能力。
              </p>
              <a href="https://infini-analytics.github.io/#/white_paper_logistics">
                查看技术详情
              </a>
            </li>
            <li>
              <img src={s3} width="180" alt="效果" />
              <h5>效果</h5>
              <ul>
                <li>提高准实交付率</li>
                <li>通过机器学习算法优化投递路线</li>
                <li>对车辆运行信息进行全方位的分析</li>
                <li>监控司机行为</li>
                <li>实施基于状态的维护</li>
              </ul>
            </li>
          </ul>
        )}
        {solutionTab === 1 && (
          <ul className="tab-content">
            <li>
              <img src={s1} width="180" alt="问题" />
              <h5>问题</h5>
              <p>
                数十亿的社交和互联网交互，移动终端日志以及传感器数据在整个电信网络中不断流动。伴随革命性
                5G
                通信技术的数据风暴，电信公司希望实时数据分析，能够快速发现网络异常并在用户受到影响之前解决它们，从而提高服务可用性和网络可靠性。
              </p>
            </li>
            <li>
              <img src={s2} width="180" alt="方案" />
              <h5>方案</h5>
              <p>
                在 Infini
                面板上直观地显示数十亿条记录，使电信行业分析师可视化客户流失，快速又轻松的构建一系列图表，以识别不同数据集或地理位置之间的模式和相关性，探索使客户满意并优化网络运营的新方法。
              </p>
              <a href="https://infini-analytics.github.io/#/white_paper_telco">
                查看技术详情
              </a>
            </li>
            <li>
              <img src={s3} width="180" alt="效果" />
              <h5>效果</h5>
              <ul>
                <li>快速发现网络异常以进行现场服务和预防性维护</li>
                <li> 了解客户流失的历史模式以建立预测性机器学习模型</li>
                <li>通过信号强度的地理空间分析改善客户体验</li>
              </ul>
            </li>
          </ul>
        )}
      </section>
    </section>
  );
};

export default Infini;
