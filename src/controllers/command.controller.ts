import { Command, CommandInstance } from "../models/Command";

export const getAllCommands = async (req: any, res: any) => {
  try {
    const commands = await Command.findAll({ include: ["Device"] });
    res.status(200).json({ commands });
  } catch (error) {
    res.status(500).json({ msg: "Error Internal" });
  }
};

export const createCommand = async (req: any, res: any) => {
  const { deviceId, command } = req.body;

  try {
    let body: any = {
      device_id: deviceId,
      command,
      executed: false,
    };

    const newCommand = await Command.create({ ...body });
    res.status(200).json({ command: newCommand });
  } catch (error) {
    res.status(500).json({ msg: "Error Internal" });
  }
};

export const executeCommand = async (req: any, res: any) => {
  const id = Number(req.params.id);

  try {
    const commandExist: CommandInstance | null = await Command.findByPk(id);

    if (!commandExist)
      return res.status(404).json({ msg: "El comando no existe" });

    await Command.update(
      { executed: true },
      {
        where: { id },
      },
    );
    res.status(200).json({ msg: "Comando ejecutado" });
  } catch (error) {
    res.status(500).json({ msg: "Error Internal" });
  }
};

export const getCommandById = async (req: any, res: any) => {
  const id = Number(req.params.id);

  try {
    const command: CommandInstance | null = await Command.findByPk(id, {
      include: ["Device"],
    });

    if (command) {
      res.status(200).json({ command });
    } else {
      return res.status(404).json({ msg: "El comando no existe" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error Internal" });
  }
};

export const deleteCommand = async (req: any, res: any) => {
  const id = Number(req.params.id);
  try {
    const commandExist: CommandInstance | null = await Command.findByPk(id);

    if (!commandExist)
      return res.status(404).json({ msg: "El comando no existe" });

    await Command.destroy({
      where: { id },
    });
    res.status(200).json({ msg: "Comando eliminado" });
  } catch (error) {
    res.status(500).json({ msg: "Error Internal" });
  }
};

export const updateCommand = async (req: any, res: any) => {
  const id = Number(req.params.id);
  const { command, executed } = req.body;

  try {
    let body: any = {
      command,
      executed,
    };

    const commandExist: CommandInstance | null = await Command.findByPk(id);

    if (!commandExist)
      return res.status(404).json({ msg: "El comando no existe" });

    await Command.update(body, {
      where: { id },
    });

    const updatedCommand: CommandInstance | null = await Command.findByPk(id, {
      include: ["Device"],
    });

    if (updatedCommand)
      return res.status(200).json({ command: updatedCommand });
  } catch (error) {
    res.status(500).json({ msg: "Error Internal" });
  }
};

export const getCommandsByDeviceId = async (req: any, res: any) => {
  const deviceId = Number(req.params.deviceId);

  try {
    const commands = await Command.findAll({
      where: { device_id: deviceId },
      include: ["Device"],
    });

    res.status(200).json({ commands });
  } catch (error) {
    res.status(500).json({ msg: "Error Internal" });
  }
};

export const getPendingCommandsByDeviceId = async (req: any, res: any) => {
  const deviceId = Number(req.params.deviceId);

  try {
    const commands = await Command.findAll({
      where: { device_id: deviceId, executed: false },
      include: ["Device"],
    });

    res.status(200).json({ commands });
  } catch (error) {
    res.status(500).json({ msg: "Error Internal" });
  }
};
