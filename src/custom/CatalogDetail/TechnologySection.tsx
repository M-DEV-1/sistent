import React from 'react';
import { ListItemIcon } from '../../base';
import { useTheme } from '../../theme';
import CollapsibleSection from './CollapsibleSection';
import { LabelDiv } from './style';

interface TechnologySectionProps {
  availableTechnologies: string[];
  openTechnologies: boolean;
  handleOpenTechnologies: () => void;
  technologySVGPath: string;
  technologySVGSubpath: string;
}

const TechnologySection: React.FC<TechnologySectionProps> = ({
  availableTechnologies,
  openTechnologies,
  handleOpenTechnologies,
  technologySVGPath,
  technologySVGSubpath
}) => {
  const theme = useTheme();

  const renderTechnologyItem = (item: string, index: number) => {
    const svg_path = `${technologySVGPath}/${item.toLowerCase()}/${technologySVGSubpath}/${item.toLowerCase()}-color.svg`;
    return (
      <LabelDiv key={index}>
        <ListItemIcon sx={{ minWidth: '1.5rem', marginRight: 1 }}>
          <img height="24px" width="24px" src={`/${svg_path}`} alt="technology icon" />
        </ListItemIcon>
        {item}
      </LabelDiv>
    );
  };

  return (
    <>
      <hr
        style={{
          backgroundColor: theme.palette.background.secondary,
          border: 'none',
          height: '1px',
          marginTop: '1rem',
          marginBottom: '1rem'
        }}
      />
      <CollapsibleSection
        title="TECHNOLOGY"
        isOpen={openTechnologies}
        onToggle={handleOpenTechnologies}
        items={availableTechnologies}
        renderItem={renderTechnologyItem}
        emptyState={'No technologies assigned to this design'}
        tooltip={'Technologies used in this design'}
      />
    </>
  );
};

export default TechnologySection;
