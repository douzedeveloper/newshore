import { Member } from "@/models/members";
import { MembersState } from "./state";

export default {
  setMembers(state: MembersState, members: Member[]) {
    state.members = members;
  },
};
