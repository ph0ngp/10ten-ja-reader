import {
  DatabaseState,
  DatabaseVersion,
  UpdateState,
  UpdateErrorState,
} from '@birchill/hikibiki-data';

export interface ResolvedDbVersions {
  kanjidb: DatabaseVersion | null;
  bushudb: DatabaseVersion | null;
}

export const notifyDbStateUpdated = ({
  databaseState,
  updateState,
  updateError,
  versions,
}: {
  databaseState: DatabaseState;
  updateState: UpdateState;
  updateError?: UpdateErrorState;
  versions: ResolvedDbVersions;
}) => ({
  type: <const>'dbstateupdated',
  databaseState,
  updateState,
  updateError,
  versions,
});

export type DbStateUpdatedMessage = ReturnType<typeof notifyDbStateUpdated>;

export const updateDb = () => ({
  type: <const>'updatedb',
});

export const cancelDbUpdate = () => ({
  type: <const>'cancelupdatedb',
});

export const deleteDb = () => ({
  type: <const>'deletedb',
});

export const reportError = (message: string) => ({
  type: <const>'reporterror',
  message,
});

export type DbListenerMessage =
  | ReturnType<typeof notifyDbStateUpdated>
  | ReturnType<typeof updateDb>
  | ReturnType<typeof cancelDbUpdate>
  | ReturnType<typeof deleteDb>
  | ReturnType<typeof reportError>;
