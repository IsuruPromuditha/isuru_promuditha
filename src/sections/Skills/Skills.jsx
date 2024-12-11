import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../commom/SkillList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='HTML'/>
        <SkillList src={checkMarkIcon} skill='CSS'/>
        <SkillList src={checkMarkIcon} skill='JavaScript'/>
        <SkillList src={checkMarkIcon} skill='React'/>
        <SkillList src={checkMarkIcon} skill='Node'/>
        </div>
        <hr/>
        <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='Tailwind CSS'/>
        <SkillList src={checkMarkIcon} skill='SQL'/>
        <SkillList src={checkMarkIcon} skill='C'/>
        <SkillList src={checkMarkIcon} skill='C++'/>
        <SkillList src={checkMarkIcon} skill='Java'/>
        </div>
        <hr/>
    </section>
  )
}

export default Skills