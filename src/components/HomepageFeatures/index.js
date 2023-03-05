import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '主流技术栈',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        使用时下流行的SpringBoot，Vue，Element UI等技术栈
      </>
    ),
  },
  {
    title: '主题系统',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          完善的主题系统,支持自定义配置,在线安装、切换、编辑、预览主题,无需开发工具,在后台即可创作专属于你的主题
      </>
    ),
  },
  {
    title: '插件系统',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          强大的扩展插件功能,更近一步满足您的需求,插件开发简单,无需学习成本
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
