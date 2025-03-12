import { User } from '../models/index.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { userName: 'Scorpion', password: 'GetOverHere!' },
    { userName: 'SubZero', password: 'IceClone123' },
    { userName: 'Raiden', password: 'ThunderGod!' },
    { userName: 'LiuKang', password: 'DragonKick' },
    { userName: 'Kitana', password: 'FanFatality' },
    { userName: 'Mileena', password: 'SaiAttack' },
    { userName: 'ShangTsung', password: 'YourSoulIsMine' },
    { userName: 'ShaoKahn', password: 'BowBeforeMe' },
    { userName: 'NoobSaibot', password: 'ShadowClone' },
    { userName: 'Kenshi', password: 'TelekineticStrike' },
    { userName: 'Siegfried', password: 'RequiemBlade' },
    { userName: 'Nightmare', password: 'SoulEdge' },
    { userName: 'Mitsurugi', password: 'SamuraiStrike' },
    { userName: 'Taki', password: 'StealthAssassin' },
    { userName: 'Ivy', password: 'WhipSword' },
    { userName: 'Astaroth', password: 'SoulCrusher' },
    { userName: 'Kilik', password: 'BoStaffMaster' },
    { userName: 'Maxi', password: 'NunchakuFury' },
    { userName: 'Sophitia', password: 'DivineBlade' },
    { userName: 'Cervantes', password: 'GhostPirate' }
  ]);
};
