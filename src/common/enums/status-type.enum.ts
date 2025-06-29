export enum StatusTypeEnum {
    OPERATIONAL = 'Operational', // Para status de dispositivos (ativos, em manutenção, etc.)
    MISSION = 'Mission',         // Para status de missões (planejada, em andamento, concluída, etc.)
    DEVICE = 'Device',           // (Poderia ser o mesmo que OPERATIONAL, ou mais granular, se necessário)
    GENERAL = 'General',  
    MEDIA = 'Media',       // Para status genéricos que não se encaixam nas outras categorias
  }