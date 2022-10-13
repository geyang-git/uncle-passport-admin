<template>
	<cl-crud ref="Crud">
		<el-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />

			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<cl-flex1 />
			<!-- 关键字搜索 -->
			<cl-search-key />
		</el-row>

		<el-row>
			<!-- 数据表格 -->
			<cl-table ref="Table" />
		</el-row>

		<el-row>
			<cl-flex1 />
			<!-- 分页控件 -->
			<cl-pagination />
		</el-row>

		<!-- 新增、编辑 -->
		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script lang="ts" name="log-log" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";

const { service } = useCool();

// cl-upsert 配置
const Upsert = useUpsert({
	items: [
		{ label: "IP", prop: "ip", required: true, component: { name: "el-input" } },
		{
			label: "url",
			prop: "url",
			component: { name: "cl-upload", props: { listType: "text", limit: 1 } }
		},
		{ label: "headers", prop: "headers", component: { name: "el-input" } }
	]
});

// cl-table 配置
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "ID", prop: "id" },
		{ label: "IP", prop: "ip" },
		{ label: "url", prop: "url" },
		{ label: "访问时间", prop: "createTime" },
		{ type: "op", buttons: ["delete"] }
	]
});

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.log.log
	},
	(app) => {
		app.refresh();
	}
);
</script>
