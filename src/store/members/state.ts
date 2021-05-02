import { Member } from "@/models/members";

export interface MembersState {
  members: Member[];
}

export default () => {
  const state: MembersState = {
    members: [],
  };
  return state;
};
