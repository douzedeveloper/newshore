import Vue from "vue";
import { ActionContext } from "vuex";
import { MembersState } from "./state";
import { Member } from "@/models/members";

export default {
  async loadMembers(ctx: ActionContext<MembersState, any>, payload?: any) {
    try {
      const items = await Vue.$api.get(payload);
      const handlerUser = items.map((u: any) => new Member(u));

      const firstname = items.map((u: any) =>
        u.name.split(" ").slice(0, -1).join(" ")
      );
      const surname = items.map((u: any) =>
        u.name.split(" ").slice(-1).join(" ")
      );

      for (let index = 0; index < handlerUser.length; index++) {
        handlerUser[index].surname = surname[index];
        handlerUser[index].firstname = firstname[index];
      }

      ctx.commit("setMembers", handlerUser);
      return true;
    } catch (e) {
      return undefined;
    }
  },
};
